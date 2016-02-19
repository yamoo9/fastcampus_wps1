## CSS 모던 레이아웃 모듈 - [Flexbox](https://www.w3.org/TR/css-flexbox-1/)

### Flexbox 구조

- 플렉스 컨테이너(`Flex Container`)
- 플렉스 아이템(`Flex Items`)
- 메인 엑시스(`Main Axis`)
	- 메인 스타트(`Main Start`)
	- 메인 엔드(`Main End`)
	- 메인 사이즈(`Main Size`)
- 크로스 엑시스(`Cross Axis`)
	- 크로스 스타트(`Cross Start`)
	- 크로스 엔드(`Cross Start`)
	- 크로스 사이즈(`Cross Size`)

-

#### Flex Container `display`

- flex
- inline-flex

#### Flex Flow Direction `flex-direction`

- row
- row-reverse
- column
- column-reverse

#### Flex Line Wrapping `flex-wrap`

- nowrap
- wrap
- wrap-reverse

#### Shortcode `flex-flow`

```css
flex-flow: direction wrap;
```

-

#### Flex Items Order `order`

- 0
- 1+
- -1

#### Flex Items Grow Factor `flex-grow`

- 0
- 1+

#### Flex Items shrink Factor `flex-shrink`

- 0
- 1+

#### Flex Items Basis Factor `flex-basis`

- width 속성 설정과 유사 `auto`, `px`, `em`, `rem`, `%`

#### Shortcode `flex`

```css
flex: grow shrink basis;
flex: 0;
flex: 1;
flex: initial;
flex: none;
```

-

#### Alignment

- justify-content
	- flex-start
	- center
	- felx-end
	- space-between
	- space-around
- align-items
	- flex-start
	- center
	- felx-end
	- baseline
	- stretch
- align-self
	- flex-start
	- center
	- felx-end
	- baseline
	- stretch
- align-content
	- flex-start
	- center
	- flex-end
	- space-between
	- space-around

---

### 더 읽어 볼 참고 자료

- [solved-by-flexbox](http://philipwalton.github.io/solved-by-flexbox/)
- [flexboxgrid](http://flexboxgrid.com/)
- [bootstrap4](http://blog.getbootstrap.com/2015/08/19/bootstrap-4-alpha/)








