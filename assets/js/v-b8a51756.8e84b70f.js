"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[59133],{86085:(e,t,d)=>{d.r(t),d.d(t,{data:()=>n});const n={key:"v-b8a51756",path:"/devices/PTM_216Z.html",title:"EnOcean PTM 216Z control via MQTT",lang:"en-US",frontmatter:{title:"EnOcean PTM 216Z control via MQTT",description:"Integrate your EnOcean PTM 216Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-02T18:14:38.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Green Power",slug:"green-power",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PTM_216Z.md",git:{updatedTime:165391124e4}}},60505:(e,t,d)=>{d.r(t),d.d(t,{default:()=>l});var n=d(66252);const o=(0,n.uE)('<h1 id="enocean-ptm-216z" tabindex="-1"><a class="header-anchor" href="#enocean-ptm-216z" aria-hidden="true">#</a> EnOcean PTM 216Z</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PTM 216Z</td></tr><tr><td>Vendor</td><td>EnOcean</td></tr><tr><td>Description</td><td>Pushbutton transmitter module</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PTM-216Z.jpg" alt="EnOcean PTM 216Z"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><p>Binding may work between this module and the actuator, depending if the actuator supports the Zigbee Green Power standard &amp; if the actuators user interface supports &quot;Finding &amp; binding&quot; or &quot;EZ-mode&quot;. For more information, contact the supplier of the actuator.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>This device has 4 buttons:</p><table><thead><tr><th>Number</th><th>Button</th><th>Position</th></tr></thead><tbody><tr><td>1</td><td>A0</td><td>top left</td></tr><tr><td>2</td><td>A1</td><td>bottom left</td></tr><tr><td>3</td><td>B0</td><td>top right</td></tr><tr><td>4</td><td>B1</td><td>bottom right</td></tr></tbody></table><p>In case the module is integrated in a single rocker switch, you need to remove the caps to expose all buttons. A button can be pressed by holding the contact of that button and then push the energy bar.</p><p>To pair it hold the corresponding button for that channel for 7 seconds or more.</p><table><thead><tr><th>Button</th><th>Channel</th></tr></thead><tbody><tr><td>A0</td><td>15</td></tr><tr><td>A1</td><td>20</td></tr><tr><td>B0</td><td>11</td></tr><tr><td>B1</td><td>25</td></tr></tbody></table><p>Once the device is paired you need to confirm the channel. To do this press A1 and B0 together. Important: don&#39;t press any other buttons between this and the pairing.</p><p>In case you want to pair it to a different channel you have to factory reset the device. This can be done by pressing all buttons (A0, A1, B0 and B1) simultaneously for at least 7 seconds.</p>',15),r=(0,n.Uk)("This device can work on any channel, not only 11, 15, 20 or 25. For this, please refer to the "),a={href:"https://www.enocean.com/en/products/enocean_modules_24ghz/ptm-216z/user-manual-pdf/",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("EnOcean PTM 216Z manual chapter 5.3"),s=(0,n.Uk)("."),c=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_1</code>, <code>press_2</code>, <code>press_1_and_2</code>, <code>press_3</code>, <code>press_1_and_3</code>, <code>press_3_and_4</code>, <code>press_1_and_2_and_3</code>, <code>press_4</code>, <code>press_1_and_4</code>, <code>press_2_and_4</code>, <code>press_1_and_2_and_4</code>, <code>press_3_and_4</code>, <code>press_1_and_3_and_4</code>, <code>press_2_and_3_and_4</code>, <code>press_all</code>, <code>press_energy_bar</code>, <code>release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),h={},l=(0,d(83744).Z)(h,[["render",function(e,t){const d=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("p",null,[r,(0,n._)("a",a,[i,(0,n.Wm)(d)]),s]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[d,n]of t)e[d]=n;return e}}}]);