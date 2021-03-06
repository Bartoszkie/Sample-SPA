import styled from 'styled-components';

// @mixin respond($breakpoint){
//     @if $breakpoint == phone {
//         @media only screen and (max-width: 37.5em) {     //600px
//             @content;
//          }
//     }
    
//     @if $breakpoint == tab-port {      //900px
//         @media only screen and (max-width: 56.25em) {
//             @content;
//          }
//     }

//     @if $breakpoint == tab-land {      //1200px
//         @media only screen and (max-width: 75em) {
        
//             @content;
//          }
//     }

//     @if $breakpoint == big-desktop {       //1800px
//         //tutaj zaczynając od 1800px, bo wczesniej od 1200px do 1800px mamy default style
//         @media only screen and (min-width: 112.5em) {
        
//             @content;
//          } 
//     }
//  }

export const respond = (breakpoint) => {
    if(breakpoint === 'phone') {
        const phoneWiev = styled.css`
            @media only screen and (max-width: 37.5em) {  
            @content;
         }
        `;
        return phoneWiev;
    }
}