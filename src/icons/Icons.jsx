export function AddToCartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "black"}}>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="17.5" cy="19.5" r="1.5"></circle>
          <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path>
          <path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path>
        </svg>
    )
}

export function RemoveFromCartIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "black"}}>
          <path d="M7 11h10v2H7z"></path>
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        </svg>
    )
}

export function ClearCartIcon () {
    return (
      <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
        <path d='M17 17a2 2 0 1 0 2 2' />
        <path d='M17 17h-11v-11' />
        <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7' />
        <path d='M3 3l18 18' />
      </svg>
    )
}

export function CartIcon () {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "black"}}>
      <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
      <circle cx="10.5" cy="19.5" r="1.5"></circle>
      <circle cx="17.5" cy="19.5" r="1.5"></circle>
    </svg>
  )
}