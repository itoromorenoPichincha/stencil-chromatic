import { newSpecPage } from "@stencil/core/testing";
import { Button } from "./button";
describe("pichincha-button", () => {
    let page;
  beforeEach(async () => {
      page = await newSpecPage({
          components: [Button],
          html: `<pichincha-button></pichincha-button>`
      });
  }); 
  it("renders disabled", async () => {
    const page2 = await newSpecPage({
      components: [Button],
      html: `<pichincha-button color="primary" size="medium" disabled="true" loading="false" class="hydrated"></pichincha-button>`,
    });

    expect(page2.root).toEqualHtml(`
      <pichincha-button color="primary" size="medium" disabled="true" loading="false" class="hydrated">
        <mock:shadow-root>
          <button class="button button--primary button--medium" disabled="">
            <pichincha-typography style="display: block;" align="center" color="blue" variant="actionText" weight="bold" weight_color="200">
              <slot></slot>  
            </pichincha-typography>
          </button>
        </mock:shadow-root>
      </pichincha-button>
    `);
  });

  it("renders destructive", async () => {
    const page2 = await newSpecPage({
      components: [Button],
      html: `<pichincha-button color="destructive" size="medium" disabled="false" loading="false" class="hydrated"></pichincha-button>`,
    });

    expect(page2.root).toEqualHtml(`
      <pichincha-button color="destructive" size="medium" disabled="false" loading="false" class="hydrated">
        <mock:shadow-root>
          <button class="button button--destructive button--medium" >
            <pichincha-typography style="display: block;" align="center" color="white" variant="actionText" weight="bold" weight_color="500">
              <slot></slot>  
            </pichincha-typography>
          </button>
        </mock:shadow-root>
      </pichincha-button>
    `);
  });

  it("renders loading", async () => {
    const page2 = await newSpecPage({
      components: [Button],
      html: `<pichincha-button color="destructive" size="medium" disabled="false" loading="true" class="hydrated"></pichincha-button>`,
    });

    expect(page2.root).toEqualHtml(`
      <pichincha-button color="destructive" size="medium" disabled="false" loading="true" class="hydrated">
        <mock:shadow-root>
          <button class="button button--destructive button--medium" >
          <pichincha-spinner background="#ffffff" border="2" color="#c5c6cd" size="16"></pichincha-spinner>
          </button>
        </mock:shadow-root>
      </pichincha-button>
    `);
  });

  it("renders loading primary", async () => {
    const page2 = await newSpecPage({
      components: [Button],
      html: `<pichincha-button color="primary" size="medium" disabled="false" loading="true" class="hydrated"></pichincha-button>`,
    });

    expect(page2.root).toEqualHtml(`
      <pichincha-button color="primary" size="medium" disabled="false" loading="true" class="hydrated">
        <mock:shadow-root>
          <button class="button button--medium button--primary" >
          <pichincha-spinner background="#0f265c" border="2" color="#c5c6cd" size="16"></pichincha-spinner>
          </button>
        </mock:shadow-root>
      </pichincha-button>
    `);
  });
   it('emits click', async() => {
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.querySelector('button')).toBeFalsy();
    const button = page.root.shadowRoot.querySelector('button');
    expect(button).toBeTruthy();
    const buttonSpy = jest.fn();
    page.win.addEventListener('clickbutton', buttonSpy);
    button.click();
    await page.waitForChanges();
    expect(buttonSpy).toHaveBeenCalled();
  }); 
});
