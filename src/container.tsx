import { PropsWithChildren } from 'react'

type ContainerProps = PropsWithChildren<{}>;

export const Container = ({children}: ContainerProps) =>
  <div style={{margin: "100px"}}>{children}</div>