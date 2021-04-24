import { fadeInDownOnEnterAnimation, fadeOutUpOnLeaveAnimation, } from 'angular-animations';

export const fadeInOut=[
  fadeInDownOnEnterAnimation({
    translate: '30px',
    duration:250,
    delay:0,

  }),
  fadeOutUpOnLeaveAnimation({
    translate: '30px',
    duration:250,
    delay:0,
  })
]

