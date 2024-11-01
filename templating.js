class RepeatingHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="mainHeader"> 
            <div>
            <h1>DALTON CHANCELLOR</h1>
            <nav>
                <div class="headerTable">
                    <a href="./index.html" class="table">HOME</a>
                    <a href="./works.html" class="table">WORKS</a>
                    <a href="./contact.html" class="table">CONTACT</a>
                </div>
            </nav>
            </div>
        </header>`;         
    }
}

class RepeatingFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="mainFooter"> 
            <div>
                Dalton Chancellor - 2024
            </div>
        </footer>
        `;
    }
}

class NestedHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="mainHeader"> 
            <div>
            <h1>DALTON CHANCELLOR</h1>
            <nav>
                <div class="headerTable">
                    <a href="../index.html" class="table">HOME</a>
                    <a href="../works.html" class="table">WORKS</a>
                    <a href="../contact.html" class="table">CONTACT</a>
                </div>
            </nav>
            </div>
        </header>`;         
    }
}

customElements.define("repeating-header",RepeatingHeader);
customElements.define("repeating-footer",RepeatingFooter);
customElements.define("nested-header", NestedHeader);