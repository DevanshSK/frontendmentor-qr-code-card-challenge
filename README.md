# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![](./design/desktop-preview.jpg)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com){:target="_blank"}
- Live Site URL: [https://devanshsk.github.io/frontendmentor-qr-code-card-challenge/](https://devanshsk.github.io/frontendmentor-qr-code-card-challenge/){:target="_blank"}

## My process
First I structured the HTML according to the project.
Then I did the styling required as per the styling guide.
Then I used GSAP to add the animations to improve the feel of the website. 
### Built with
- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox
- Mobile-first workflow
- [GSAP](https://greensock.com/gsap/){:target="_blank"} - JS animation library

### What I learned

Here I learned about CSS flexbox and GSAP animations.

The code to GSAP animations is given below:

```js
  // Card animation
  gsap.fromTo(card, {scale: 0}, {scale: 1, duration: 1, ease: "elastic.out(1.5, 1)"});

  // Footer animation
  gsap.set('.letter', {display: "inline-block"});
    
  gsap.fromTo('.letter',{y:"100%", opacity: 0} ,{y:0, duration: 0.75, opacity: 1, delay: 2, stagger: 0.05, ease: "back.out(3)"});
```

### Continued development

In future, I want to recreate this card component using [ReactJS](https://reactjs.org/){:target="_blank"} entirely, When I am more comfortable in React.

### Useful resources

- [GSAP Documentation](https://www.example.com){:target="_blank"} - This is the official documentation of GSAP library.
- [GSAP Cheatsheet](https://greensock.com/cheatsheet/){:target="_blank"} - This cheatsheet helped greatly too😊.

## Author
- Frontend Mentor - [@DevanshSK](https://www.frontendmentor.io/profile/DevanshSK){:target="_blank"}
- Twitter - [@devansh_sk](https://twitter.com/devansh_sk){:target="_blank"}
