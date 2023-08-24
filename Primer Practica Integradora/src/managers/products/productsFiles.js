import fs from 'fs';

class productManager {
  constructor(path) {
    this.path = path;
    this.products = fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path,`utf-8`)) : [];
  }

  getProducts() {
    this.products = fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path,`utf-8`)) : [];
    return this.products;
  }

  addProduct(title, price, stock) {
    if ( fs.existsSync(this.path)) 
      this.products = JSON.parse(fs.readFileSync(this.path,`utf-8`));

    const id = this.products.length == 0 ? 1 : this.products[this.products.length - 1].id + 1;
    const newProduct = {
      id,
      title,
      price,
      stock
    };
    // if (this.products.some(x => x.code == newProduct.code))
    //   throw new Error(`Code ${newProduct.code} repeated`);
    if (!title || !price  || !stock)
      throw new Error("All fields are mandatory");

    this.products.push(newProduct);
    fs.writeFileSync(this.path, JSON.stringify(this.products));
  }
  
  getProductByID(id) {
    const productSearch = fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path,`utf-8`)).find(x => x.id == id) : null;

    if (productSearch)
      console.log(productSearch);
    else
      console.log("Product not found");
      return productSearch;
  }

  updateProduct(id, update) {
    const productSearch = fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path,`utf-8`)).find(x => x.id == id) : null;

    if (productSearch){
      for (let k in update) {
        if (k == `id`)
          continue
        productSearch[k] = update[k];
      }
      this.products[this.products.findIndex(x => x.id == id)] = productSearch;
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    } else {
      console.log("Product not found");
    }
  }

  deleteProduct(id) {
    const productSearch = fs.existsSync(this.path) ? JSON.parse(fs.readFileSync(this.path,`utf-8`)).find(x => x.id == id) : null;

    if (productSearch){
      this.products.splice(this.products.findIndex(x => x.id == id), 1);
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
  }
}

export default productManager;