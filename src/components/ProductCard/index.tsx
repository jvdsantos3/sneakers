import {
  Button,
  CloseButton,
  Content,
  Overlay,
  ProductCardContainer,
  ProductDetailSize,
  ProductDetails,
  ProductDetailsActions,
  ProductDetailsContent,
  ProductDetailsHeader,
} from './styles'
import { priceFormatter } from '../../util/formatter'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext, useState } from 'react'
import { EditProductDialog, EditProductFormInputs } from '../EditProductDialog'
import { ProductContext } from '../../contexts/ProductContext'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { DeleteAlert } from '../DeleteAlert'

interface ProductCardProps {
  id: number
  image: string
  name: string
  brand: string
  price: number
  size: number
  amount: number
}

export function ProductCard({
  id,
  image,
  name,
  brand,
  price,
  size,
  amount,
}: ProductCardProps) {
  const [openDetails, setOpenDetails] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

  const { editProduct, deleteProduct } = useContext(ProductContext)

  function handleEditProduct(data: EditProductFormInputs) {
    const product = { ...data, price: data.price * 100 }

    editProduct(id, product)

    setOpenEdit(false)
  }

  function handleDeleteProduct() {
    deleteProduct(id)

    setOpenDetails(false)
  }

  return (
    <Dialog.Root open={openDetails} onOpenChange={setOpenDetails}>
      <Dialog.Trigger asChild>
        <ProductCardContainer>
          <img src={image} alt="Image of product" />

          <div>
            <span>{brand}</span>
            <p>{name}</p>
            <strong>{priceFormatter.format(price / 100)}</strong>
          </div>
        </ProductCardContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <ProductDetails>
            <img src={image} alt="Imagem do sneaker" />

            <ProductDetailsContent>
              <ProductDetailsHeader>
                <h2>{name}</h2>
                <span>{brand}</span>
                <strong>{priceFormatter.format(price / 100)}</strong>

                <ProductDetailSize>
                  <div>
                    <strong>Tamanho</strong>
                    <span>{size}</span>
                  </div>

                  <div>
                    <strong>Quantidade</strong>
                    <span>{amount}</span>
                  </div>
                </ProductDetailSize>
              </ProductDetailsHeader>
              <ProductDetailsActions>
                <Dialog.Root open={openEdit} onOpenChange={setOpenEdit}>
                  <Dialog.Trigger asChild>
                    <Button variant="yellow">Editar</Button>
                  </Dialog.Trigger>
                  <EditProductDialog
                    image={image}
                    name={name}
                    brand={brand}
                    size={size}
                    price={price}
                    amount={amount}
                    editProduct={handleEditProduct}
                  />
                </Dialog.Root>
                <AlertDialog.Root>
                  <AlertDialog.Trigger asChild>
                    <Button variant="red">Excluir</Button>
                  </AlertDialog.Trigger>

                  <DeleteAlert handleDeleteProduct={handleDeleteProduct} />
                </AlertDialog.Root>
              </ProductDetailsActions>
            </ProductDetailsContent>
          </ProductDetails>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
