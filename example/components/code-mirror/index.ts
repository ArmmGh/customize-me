import { CustomizeMe } from '../../../src';

@CustomizeMe({
    selector: 'code-mirror',
    template: `<pre>
<span class='reserved'>import</span> { <span class='keyword'>CustomizeMe</span> } <span class='reserved'>from</span> <span class='string'>'customize-me'</span>;

@<span class='function'>CustomizeMe</span>({
  <span class='keyword'>selector</span>: <span class='string'>'action-button'</span>,
  <span class='keyword'>template</span>: <span class='string'>''</span>, <span class='comment'>// HTML here</span>
  <span class='keyword'>style</span>: <span class='string'>''</span>, <span class='comment'>// styles here</span>
  <span class='keyword'>useShadow</span>: <span class='value'>true</span>
})
<span class='reserved'>export</span> <span class='reserved'>class</span> <span class='classname'>FlexBox</span> <span class='reserved'>extends</span> <span class='classname'>HTMLElement</span> {
  <span class='reserved'>constructor</span>() {
    <span class='classname'>super</span>();
  }

  @<span class='function'>Listen</span>(<span class='string'>'click'</span>)
  <span class='classname'>onSubmitClick</span>(event: Event) {}
}</pre>`,
    style: `
		:host {
            padding: 30px;
			--reserved: rgb(198, 120, 221);
			--keyword: rgb(224, 108, 117);
			--string: rgb(152, 195, 121);
			--function: rgb(97 175 239);
			--classname: rgb(229, 192, 123);
			--comment: rgb(127 132 142);
			--value: rgb(209 154 102);
			background-color: rgb(40, 44, 52);
            border-radius: 8px;
            overflow: auto;
            flex: 45;
		}
		:host pre {
			font-size: 17px;
			color: rgb(171, 178, 191);
		}
		:host .token {}
		:host .reserved {
			color: var(--reserved);
		}
		:host .keyword {
			color: var(--keyword);
		}
		:host .string {
			color: var(--string);
		}
		:host .comment {
			color: var(--comment);
		}
		:host .classname {
			color: var(--classname);
		}
		:host .function {
			color: var(--function);
		}
		:host .value {
			color: var(--value);
		}
	`,
    useShadow: true
})
export class CodeMirror extends HTMLElement {
    constructor() {
        super();
    }
}
