import { screen ,render} from "@testing-library/react";
import Scoops from "."
import userEvent from "@testing-library/user-event"

test("API'dan  alınan veriler için ekrana kartlar basılır", async ()=>{
    render(<Scoops/>);

    const images =  await screen.findAllByAltText("çeşit-resim")

    expect(images.length).toBeGreaterThanOrEqual(1)
})


test("Çeşitlerin ekleme ve sıfırlama özellikleri toplam fiyatı etkiler", async ()=>{
    const user = userEvent.setup()


    render(<Scoops/>)

    const addButtons= await screen.findAllByRole("button",{name:/ekle/i})
    const delButtons= await screen.findAllByRole("button",{name:/sıfırla/i})

    const total = screen.getByTestId("total")

    expect(total.textContent).toBe("0")
    
    await user.click(addButtons[0])

    expect(total.textContent).toBe("20")

    await user.dblClick(addButtons[2])

    expect(total.textContent).toBe("60")

    await user.click(delButtons[0])

    expect(total.textContent).toBe("40")

    await user.click(delButtons[2])

    expect(total.textContent).toBe("0")

})