class Inventario {
  constructor(){
    this.inventario = [];
  }

  agregar(producto){
    if(this.inventario.length === 0){
      this.inventario.push(producto);
      return;
    }

    let pos = 0;
    while(pos < this.inventario.length && this.inventario[pos].id < producto.id){
      pos++;
    }

    if(pos === this.inventario.length){
      this.inventario.push(producto);
      return;
    }

    this.inventario.push(this.inventario[this.inventario.length - 1]);

    for(let i = this.inventario.length - 2; i >= pos; i--){
      this.inventario[i + 1] = this.inventario[i];
    }

    this.inventario[pos] = producto;
  }

  buscar(id){
    for(let i = 0; i < this.inventario.length; i++){
      if(this.inventario[i].id === id) return this.inventario[i];
    }
    return null;
  }

  eliminar(id){
    let pos = 0;
    while(pos < this.inventario.length && this.inventario[pos].id !== id) pos++;
    if(pos === this.inventario.length) return null;
    const eliminado = this.inventario[pos];
    for(let i = pos; i < this.inventario.length - 1; i++){
      this.inventario[i] = this.inventario[i + 1];
    }
    this.inventario.pop();
    return eliminado;
  }

  extraerPrimero(){
    if(this.inventario.length === 0) return null;
    const primero = this.inventario[0];
    for(let i = 0; i < this.inventario.length - 1; i++){
      this.inventario[i] = this.inventario[i + 1];
    }
    this.inventario.pop();
    return primero;
  }

  listar(){
    let s = "";
    for(let i = 0; i < this.inventario.length; i++) s += this.inventario[i].info();
    return s;
  }

  listarHtml(){
    let s = "";
    for(let i = 0; i < this.inventario.length; i++) s += this.inventario[i].infoHtml();
    return s;
  }
}
