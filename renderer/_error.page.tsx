import { PageNotFound } from "../src/pages/404";

export function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
        <PageNotFound />
    )
  } else {
    return (
      <>
        <h1>500 Internal Error</h1>
        <p>Something went wrong.</p>
      </>
    )
  }
}
