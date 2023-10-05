import {
  CardContainer,
  CardContainerHeader,
  ProductActionButton,
  ProductCardContent,
  ProductDetailTags,
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
import { BaseDialogOverlay, DialogCloseButton } from '../../styles/global'
import defaultImage from '../../assets/default_product.jpg'

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
        <CardContainer>
          <img
            src={image}
            alt="Image of product"
            onError={(err) => {
              return ((err.target as HTMLImageElement).src = defaultImage)
            }}
          />

          <div>
            <CardContainerHeader>
              <span>{brand}</span>
              <span>{size}</span>
            </CardContainerHeader>
            <p>{name}</p>
            <strong>{priceFormatter.format(price / 100)}</strong>
          </div>
        </CardContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <BaseDialogOverlay />

        <ProductCardContent>
          <DialogCloseButton>
            <X size={24} />
          </DialogCloseButton>

          <ProductDetails>
            <img
              src={image}
              alt="Imagem do sneaker"
              onError={(err) => {
                return ((err.target as HTMLImageElement).src = defaultImage)
              }}
            />

            <ProductDetailsContent>
              <ProductDetailsHeader>
                <h2>{name}</h2>
                <span>{brand}</span>
                <strong>{priceFormatter.format(price / 100)}</strong>

                <ProductDetailTags>
                  <div>
                    <strong>Tamanho</strong>
                    <span>{size}</span>
                  </div>

                  <div>
                    <strong>Quantidade</strong>
                    <span>{amount}</span>
                  </div>
                </ProductDetailTags>
              </ProductDetailsHeader>
              <ProductDetailsActions>
                <Dialog.Root open={openEdit} onOpenChange={setOpenEdit}>
                  <Dialog.Trigger asChild>
                    <ProductActionButton $variant="yellow">
                      Editar
                    </ProductActionButton>
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
                    <ProductActionButton $variant="red">
                      Excluir
                    </ProductActionButton>
                  </AlertDialog.Trigger>

                  <DeleteAlert handleDeleteProduct={handleDeleteProduct} />
                </AlertDialog.Root>
              </ProductDetailsActions>
            </ProductDetailsContent>
          </ProductDetails>
        </ProductCardContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
