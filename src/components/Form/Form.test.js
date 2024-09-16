import { fireEvent, render,screen } from "@testing-library/react"
import Form from "."

test("koşulların onaylanmasına göre buton aktifliği" , ()=>{
    render(<Form/>)

    const checkbox= screen.getByRole("checkbox")
    const button = screen.getByRole("button")

    expect(button).toBeDisabled()
    
    expect(checkbox).not.toBeChecked()

    fireEvent.click(checkbox)
    
    expect(button).toBeEnabled()

    fireEvent.click(checkbox)

    expect(button).toBeDisabled()
})

test("Butonun hover durumuna göre bildirim gözükür", ()=>{
    render(<Form/>)

    const checkbox= screen.getByRole("checkbox")
    const button = screen.getByRole("button")
    const alert =screen.getByText(/size gerçekten/i)

    fireEvent.click(checkbox)

    expect(alert).not.toBeVisible()

    fireEvent.mouseEnter(button)

    expect(alert).toBeVisible()

    fireEvent.mouseLeave(button)

    expect(alert).not.toBeVisible()


})