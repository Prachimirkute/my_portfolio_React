import React, { useState } from "react";

const ProductValidation = () => {
  const [productName, setProductName] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [productNameError, setProductNameError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    setProductName("qndhdhs");
  };
  const handleProductNameBlur = (event) => {
    setProductNameError("Product name is required");
  };
  const handleQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(value);
    setQuantityError(value ? "" : "Quantity is required");
  };

  const isFormValid = () => {
    return !productNameError && !quantityError && productName && quantity;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", { productName, quantity });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="name-input">Product Name:</label> */}
          <input
            type="text"
            id="name-input"
            data-testid="name-input"
            value={productName}
            placeholder="Product Name"
            onChange={handleProductNameChange}
            onBlur={handleProductNameBlur}
          />
          <br></br>
          {productNameError && (
            <p data-testid="name-input-error">{productNameError}</p>
          )}
        </div>
        <br></br>
        <div>
          {/* <label htmlFor="quantity-input">Quantity:</label> */}
          <input
            type="text"
            id="quantity-input"
            data-testid="quantity-input"
            required
            value={quantity}
            placeholder="Quantity"
            onChange={handleQuantityChange}
          />
          <br></br>
          {quantityError && (
            <p data-testid="quantity-input-error">{quantityError}</p>
          )}
        </div>
        <br></br>
        <button
          type="submit"
          data-testid="submit-button"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
      <p>{quantity}</p>
    </>
  );
};

export default ProductValidation;
