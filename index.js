"use strict";
document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    const input = document.querySelectorAll('.text-input input');
    let parent, sibling;
    console.log('inputs', input);
    input.forEach((e) => {
        let f = e;
        f.addEventListener('focus', event => {
            const el = (event.target);
            el.placeholder = '';
            const parent = el.parentElement;
            const siblingLabel = parent.querySelector('label');
            siblingLabel.style.display = 'block';
        });
        f.addEventListener('focusout', event => {
            const placeholder = {
                'username-email': 'Username Or Email',
                password: 'Password'
            };
            const el = (event.target);
            const parent = el.parentElement;
            const siblingLabel = parent.querySelector('label');
            if (!el.value) {
                const key = el.id;
                if (key == 'username-email' || key == 'password')
                    el.placeholder = placeholder[key];
                siblingLabel.style.display = 'none';
            }
        });
    });
});
