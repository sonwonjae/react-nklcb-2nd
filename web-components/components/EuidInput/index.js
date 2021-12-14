// euid-input 커스텀 요소 등록(정의)

if ('customElements' in window) {
  // 컴포넌트 클래스
  class EuidInput extends HTMLElement {
    constructor() {
      super();
      // 렌더링 유무 처리할 상태 속성
      this.rendered = false;
    }

    // life cycle
    connectedCallback() {
      if (!this.rendered) {
        this.render();
        this.rendered = true;
      }
    }

    render() {
      const type = this.getAttribute('type');
      const label = this.getAttribute('label');

      this.innerHTML = /* HTML */ `
        <div class="EuidInput">
          <label>${label}</label>
          <input type=${type} />
        </div>
      `;
    }
  }

  // 컴포넌트를 커스텀 요소로 정의
  window.customElements.define('euid-input', EuidInput);
}
