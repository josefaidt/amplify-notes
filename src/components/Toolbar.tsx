import { createContext, useState, useEffect, useContext } from 'react'
import type { FunctionComponent, PropsWithChildren, Element } from 'react'

const ToolbarActionsStateContext = createContext<FunctionComponent[]>([])
const ToolbarActionsSetStateContext = createContext(null)

export const ToolbarProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [actions, setActions] = useState<FunctionComponent[]>([])

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
  add: (action: Element | FunctionComponent) => void
  remove: (action: Element | FunctionComponent) => void
}

export const useToolbar = (): [any[], ToolbarActions] => {
  const [state, setState] = useToolbarActions()

  return [
    state,
    {
      add: (action: Element | FunctionComponent) => {
        setState((actions) => [...actions, action])
      },
      remove: (action: Element | FunctionComponent) => {
        setState((actions) => actions.filter((a) => a !== action))
      },
    },
  ]
}

export const Toolbar: FunctionComponent = ({ children }) => {
  const [actions, setActions] = useToolbarActions()

  console.log('actions are', actions)

  useEffect(() => {
    return () => {
      setActions([])
    }
  }, [])

  return (
    <div>
      {actions?.map((Action, idx) => (
        <Action key={idx} />
      ))}
      {children}
    </div>
  )
}

export default Toolbar
