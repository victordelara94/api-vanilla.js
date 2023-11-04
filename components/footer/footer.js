import { Component } from "../component.js";

export class Footer extends Component {
  constructor(selector) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
      <footer class="footer">
            
            <a class="footer-github" href="https://github.com/victordelara94" target="_blank">
              <img
                src="../assets/github-logo.png"
                height="50"    
                alt="GitHub logo "
              />
            </a>
             <a class="footer-linkedin" href="https://www.linkedin.com/in/victordelaramartinez/" target="_blank">
              <img
                src="../assets/linkedin.svg"
                height="50"    
                alt="Linkedin logo"
              />
            </a>
          </div>
        
      </footer>
    `;
  }
}
