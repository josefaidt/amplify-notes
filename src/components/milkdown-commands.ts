import {
  createCmdKey,
  MilkdownPlugin,
  CommandsReady,
  commandsCtx,
  schemaCtx,
} from '@milkdown/core'
import { wrapIn } from 'prosemirror-commands'

export const SaveDoc = createCmdKey()
export const plugin: MilkdownPlugin = () => async (ctx) => {
  // wait for command manager ready
  await ctx.wait(CommandsReady)

  const commandManager = ctx.get(commandsCtx)
  const schema = ctx.get(schemaCtx)

  // commandManager.create(SaveDoc, () => typeof Command)
}
