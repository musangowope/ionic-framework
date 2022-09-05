import type { ComponentInterface } from '@stencil/core';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ion-accordion',
  styleUrl: 'accordion.scss'
})
export class Accordion implements ComponentInterface {

  render() {

    return (
      <Host>
        <div>Hello world</div>
      </Host>
    );
  }
}
