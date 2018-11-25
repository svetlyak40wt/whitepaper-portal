const EDITOR_BLOCK = document.querySelector('.editor');
const EDITOR_INTERFACE = EDITOR_BLOCK.querySelector('.editor__interface');
const STYLESHEET = document.styleSheets[0];

{
    // изменение цвета
    let colorBackground = EDITOR_BLOCK.querySelector('input[name="colorBackground"]');
    let colorText = EDITOR_BLOCK.querySelector('input[name="colorText"]');
    let colorBrand = EDITOR_BLOCK.querySelector('input[name="colorBrand"]');
    let colorPath = EDITOR_BLOCK.querySelector('input[name="colorPath"]');
    let colorPhantom = EDITOR_BLOCK.querySelector('input[name="colorPhantom"]');

    colorBackground.addEventListener('change', () => {
        let color = colorBackground.value;
        let style = `--color-base-essential: ${color};
                     --color-bg-default: ${color};
                     --color-bg-soft: ${changeColor(color, 25, 2, 5, 1)}`;

        insertStyle(`color`, style);
    });
    colorText.addEventListener('change', () => {
        let color = colorText.value;
        let style = `--color-base-base: ${color};
                     --color-bg-hover: ${changeColor(color, 0, 0, 0, 0.15)};
                     --color-typo-primary: ${color};
                     --color-typo-promo: ${changeColor(color, 0, 0, 0, 0.8)};
                     --color-typo-secondary: ${changeColor(color, 0, 0, 0, 0.6)};
                     --color-typo-ghost: ${changeColor(color, 0, 0, 0, 0.3)};
                     --color-typo-disable: ${changeColor(color, 0, 0, 0, 0.3)}`;

        insertStyle(`color`, style);
    });
    colorBrand.addEventListener('change', () => {
        let color = colorBrand.value;
        let style = `--color-base-project: ${color};
                     --color-bg-brand: ${color};
                     --color-bg-action: ${changeColor(color, 0, 0, 15, 1)};
                     --color-bg-selection: ${changeColor(color, -1, 0, 31, 1)};
                     --color-typo-brand: ${color};`;

        insertStyle(`color`, style);
    });
    colorPath.addEventListener('change', () => {
        let color = colorPath.value;
        let style = `--color-base-path: ${color};
                     --color-bg-link: ${changeColor(color, -7, -13, 14, 0.4)};
                     --color-link: ${color};
                     --color-link-external: ${color};
                     --color-link-minor: ${changeColor(color, 22, -80, 13, 1)};
                     --color-link-hover: ${changeColor(color, 0, 0, -7, 1)};`;

        insertStyle(`color`, style);
    });
    colorPhantom.addEventListener('change', () => {
        let color = colorPhantom.value;
        let style = `--color-base-phantom: ${color};
                     --color-bg-border: ${changeColor(color, 0, 0, 0, 0.05)};
                     --color-bg-stripe: ${changeColor(color, 0, 0, 0, 0.04)};
                     --color-bg-ghost: ${changeColor(color, 0, 0, 0, 0.08)};
                     --color-bg-tone: ${changeColor(color, 0, 0, 0, 0.9)};`;

        insertStyle(`color`, style);
    });

    let changeColor = (color, h, s, l, a) => {
        let hsl = rgbToHsl(color);
        h = hsl[0] + h;
        s = hsl[1] + s;
        l = hsl[2] + l;

        return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }

    let rgbToHsl = (color) => {
        r = parseInt(color.substring(1, 3), 16);
        g = parseInt(color.substring(3, 5), 16);
        b = parseInt(color.substring(5, 7), 16);

        r /= 255, g /= 255, b /= 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max == min) { h = s = 0; }
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [(h*100+0.5)|0, (s*100+0.5)|0, (l*100+0.5)|0];
    }
}
{
    // изменение отступов
    let spaceModule = EDITOR_BLOCK.querySelector('input[name="spaceModule"]');

    spaceModule.addEventListener('change', () => {
        let space = spaceModule.value;
        let style = `--space-module: ${space}px;`;

        insertStyle('space', style);
    });
}
{
    // изменение размеров текста
    let typoRule = EDITOR_BLOCK.querySelectorAll('input[name="typoRule"]');

    typoRule.forEach((radio) => {
        radio.addEventListener('click', () => {
            let type = radio.getAttribute('data-rule');

            EDITOR_INTERFACE.classList.remove('theme_size_editor-default');
            EDITOR_INTERFACE.classList.remove('theme_size_editor-prime');
            EDITOR_INTERFACE.classList.remove('theme_size_editor-golden');
            EDITOR_INTERFACE.classList.remove('theme_size_editor-fibonacci');
            EDITOR_INTERFACE.classList.add(`theme_size_editor-${type}`);
        })
    });
}
{
    // изменение соотношения секций
    let layoutRatio = EDITOR_BLOCK.querySelector('input[name="layoutRatio"]');
    let layout = EDITOR_INTERFACE.querySelector('.tpl-layout');

    layoutRatio.addEventListener('change', () => {
        let ratio = parseInt(layoutRatio.value);
        let classes = layout.getAttribute('class');

        layout.classList.remove(`tpl-layout_structure_10-90`);
        layout.classList.remove(`tpl-layout_structure_20-80`);
        layout.classList.remove(`tpl-layout_structure_30-70`);
        layout.classList.remove(`tpl-layout_structure_40-60`);
        layout.classList.remove(`tpl-layout_structure_50-50`);
        layout.classList.remove(`tpl-layout_structure_60-40`);
        layout.classList.remove(`tpl-layout_structure_70-30`);
        layout.classList.remove(`tpl-layout_structure_80-20`);
        layout.classList.remove(`tpl-layout_structure_90-10`);

        layout.classList.add(`tpl-layout_structure_${ratio * 10}-${100 - ratio * 10}`);
    });
}

let insertStyle = (type, style) => {
    STYLESHEET.insertRule(`.theme_${type}_editor-default { ${style} }`, STYLESHEET.rules.length);
}

{
    let selectables = EDITOR_INTERFACE.querySelectorAll('.selectable');

    selectables.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.stopPropagation();
            item.style.outline = '1px solid yellow';
        });
        item.addEventListener('mouseout', () => {
            let tooltip = item.querySelector('.tooltip') || false;

            if(tooltip)
                tooltip.remove();

            item.style.outline = '';
        });
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            let tooltip = document.createElement('div')
            let classes = String(item.classList);

            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `${classes}`;

            item.appendChild(tooltip);
        });
    });
}
