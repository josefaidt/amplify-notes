import { createContext, useState, useEffect, useContext } from 'react'
import type * as React from 'react'

const ToolbarActionsStateContext = createContext<React.FunctionComponent[]>([])
const ToolbarActionsSetStateContext: React.Context<any> = createContext(null)

type ToolbarProviderProps = {
  children: JSX.Element[] | JSX.Element
}

export const ToolbarProvider: React.FC<ToolbarProviderProps> = ({
  children,
}) => {
  const [actions, setActions] = useState<React.FunctionComponent[]>([])

  return (
    <ToolbarActionsStateContext.Provider value={actions}>
      <ToolbarActionsSetStateContext.Provider value={setActions}>
        {children}
      </ToolbarActionsSetStateContext.Provider>
    </ToolbarActionsStateContext.Provider>
  )
}

export const useToolbarActions = () => {
  const actions = useContext(ToolbarActionsStateContext)
  const setActions = useContext(ToolbarActionsSetStateContext)
  if (!actions || !setActions) {
    throw new Error('useToolbarActions must be used within a ToolbarProvider')
  }
  return [actions, setActions]
}

type ToolbarActions = {
  add: (action: () => JSX.Element) => void
  remove: (action: () => JSX.Element) => void
}

export const useToolbar = (): [React.FC[], ToolbarActions] => {
  const [state, setState] = useToolbarActions()

  return [
    state,
    {
      add: (action: () => JSX.Element) => {
        setState((actions: JSX.Element[]) => [...actions, action])
      },
      remove: (action: () => JSX.Element) => {
        setState((actions: Array<() => JSX.Element>) =>
          actions.filter((a) => a !== action)
        )
      },
    },
  ]
}

type ToolbarProps = {
  children: JSX.Element[] | JSX.Element
}

export const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  const [actions] = useToolbar()

  return (
    <div>
      {actions?.map((Action: React.FC, idx: number) => (
        <Action key={idx} />
      ))}
      {children}
    </div>
  )
}

export default Toolbar
