import { version } from '../../package.json'

export function TheFooter() {
  return (
    <div class="h-6 text-small p-1 bg-primary border-solid border-0 border-t-1 border-color-primary flex-row">
      <div class="f-1"></div>
      <div class="text-center layout-stack-horizontal">
        <a
          class="text-decoration-none text-secondary hover-bg-link px-2"
          href="https://sakih.net/"
        >© 2023 saki</a>
        <a
          class="text-decoration-none text-secondary hover-bg-link px-2"
          href="https://github.com/sakihet/trellith"
        >GitHub</a>
      </div>
      <div class="f-1 text-right">
        <span class="font-mono text-secondary">v{version}</span>
      </div>
    </div>
  )
}
