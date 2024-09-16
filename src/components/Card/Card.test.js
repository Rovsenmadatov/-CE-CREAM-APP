import { screen ,render} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Card from ".";


const item= {
    id:"123",
    name: "Vanilla",
    imagePath: "/images/vanilla.png"
  }

test("Miktar,başlık ve fotoğraf gelen propa göre ekrana basılır", async()=>{
    render(<Card item={item} amount={5} />);

    const amount = screen.getByTestId('amount');

    expect(amount.textContent).toBe('5');

    screen.getByText("Vanilla");

    const image= screen.getByAltText("çeşit-resim")

    expect(image).toHaveAttribute("src","/images/vanilla.png")
})

test("Butonlara tıklanınca fonksiyonlar doğru parametrelerle çalışır", async()=>{
  const user=userEvent.setup()

  const addMockFn = jest.fn()
  const clearMockFn = jest.fn()
  render(<Card item={item} addToBasket={addMockFn} clearToBasket={clearMockFn} amount={0} />)

 const addBtn = screen.getByRole("button",{name:/ekle/i})
 const clearBtn = screen.getByRole("button",{name:/sıfırla/i})

  await user.click(addBtn)
  
  expect(addMockFn).toHaveBeenCalledWith(item)

  await user.click(clearBtn)

  expect(clearMockFn).toHaveBeenCalledWith(item.id)
})