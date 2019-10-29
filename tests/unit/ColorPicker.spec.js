import { shallowMount } from '@vue/test-utils'
import ColorPicker from '@/components/ColorPicker'
import convert from 'color-convert'

let wrapper = null

const propsData = {
  swatches: ['e3342f', '3490dc', 'f6993f', '38c172', 'fff']
}

beforeEach(() => (wrapper = shallowMount(ColorPicker, { propsData })))
afterEach(() => wrapper.destroy())

describe('ColorPicker', () => {
  describe('Swatches', () => {
    test('displays each color as an individual swatch', () => {
      const swatches = wrapper.findAll('.swatch')
      propsData.swatches.forEach((swatch, index) => {
        expect(swatches.at(index).attributes().style).toBe(
          `background: rgb(${convert.hex.rgb(swatch).join(', ')});`
        )
      })
    })

    test('sets the first swatch as the selected one by default', () => {
      const firstSwatch = wrapper.find('.swatch')
      expect(firstSwatch.classes()).toContain('active')
    })

    test('makes the swatch active when clicked', () => {
      const targetSwatch = wrapper.findAll('.swatch').at(2)
      targetSwatch.trigger('click')
      expect(targetSwatch.classes()).toContain('active')
    })

    test('displays the code in the right color when chaning color', () => {
      wrapper
        .findAll('.swatch')
        .at(2)
        .trigger('click')
      expect(wrapper.find('.color-code').text()).toEqual('#f6993f')
    })
  })

  describe('Color model', () => {
    test('displays each mode as an individual button', () => {
      const buttons = wrapper.findAll('.color-mode')
      // console.log('buttons', buttons.length)
      buttons.wrappers.forEach(button => {
        // console.log('class', button.classes())
        expect(button.classes()).toEqual(
          expect.arrayContaining([expect.stringMatching(/color-mode-\w{1,}/)])
        )
      })
    })

    test('sets the first mode as the selected one by default', () => {
      const firstBtn = wrapper.find('.color-mode')
      expect(firstBtn.classes()).toContain('active')
    })

    test('display the default swatch in the default mode', () => {
      // console.log('color', wrapper.find('.color-code').text())
      expect(wrapper.find('.color-code').text()).toEqual('#e3342f')
    })

    test('display the code in the right mode when changing mode', () => {
      wrapper.find('.color-mode-hsl').trigger('click')
      expect(wrapper.find('.color-code').text()).toEqual('2°, 76%, 54%')
    })
  })
})
