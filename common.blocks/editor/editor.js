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
        item.addEventListener('click', (e) => {
            removeSelectedClass();

            e.stopPropagation();

            if (!item.querySelector('.tooltip')) {
                let tooltip = document.createElement('div')
                let classes = item.classList;

                tooltip.classList.add('tooltip');
                if(classes.contains('text'))
                    content = makeTextControls(classes);

                tooltip.innerHTML = content;
                item.appendChild(tooltip);
                bindTooltip(item);
            }

            item.classList.add('selected');
        });
    });

    EDITOR_BLOCK.addEventListener('click', () => {
        removeSelectedClass();
    });

    let makeTextControls = (classes) => {
        text = `<div class="tooltip__row"><div class="tooltip__radiogroup">`;

        if(classes.contains('text_align_left'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_align_left">left</div>`;
        else text += `<div class="tooltip__radio" data-class="text_align_left">left</div>`;

        if(classes.contains('text_align_center'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_align_center">center</div>`;
        else text += `<div class="tooltip__radio" data-class="text_align_center">center</div>`;

        if(classes.contains('text_align_right'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_align_right">right</div>`;
        else text += `<div class="tooltip__radio" data-class="text_align_right">right</div>`;

        text += `</div></div>`;
        text += `<div class="tooltip__row"><div class="tooltip__radiogroup">`;

        if(classes.contains('text_decoration_underline'))
            text += `<div class="tooltip__radio tooltip__radio_active text_decoration_underline" data-class="text_decoration_underline">Aa</div>`;
        else text += `<div class="tooltip__radio text_decoration_underline" data-class="text_decoration_underline">Aa</div>`;

        text += `</div>`;
        text += `<div class="tooltip__radiogroup">`;

        if(classes.contains('text_style_italic'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_style_italic" data-class="text_style_italic">Aa</div>`;
        else text += `<div class="tooltip__radio text text_style_italic" data-class="text_style_italic">Aa</div>`;

        text += `</div>`;
        text += `<div class="tooltip__radiogroup">`;

        if(classes.contains('text_transform_uppercase'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_transform_uppercase">AA</div>`;
        else text += `<div class="tooltip__radio" data-class="text_transform_uppercase">AA</div>`;

        text += `</div></div>`;
        text += `<div class="tooltip__row"><div class="tooltip__radiogroup">`;

        if(classes.contains('text_size_xs'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_xs">xs</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_xs">xs</div>`;

        if(classes.contains('text_size_s'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_s">s</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_s">s</div>`;

        if(classes.contains('text_size_m'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_m">m</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_m">m</div>`;

        if(classes.contains('text_size_l'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_l">l</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_l">l</div>`;

        if(classes.contains('text_size_xl'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_xl">xl</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_xl">xl</div>`;

        if(classes.contains('text_size_xxl'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_xxl">xxl</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_xxl">xxl</div>`;

        if(classes.contains('text_size_xxxl'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_xxxl">xxxl</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_xxxl">xxxl</div>`;

        if(classes.contains('text_size_xxxxl'))
            text += `<div class="tooltip__radio tooltip__radio_active" data-class="text_size_xxxxl">xxxxl</div>`;
        else text += `<div class="tooltip__radio" data-class="text_size_xxxxl">xxxxl</div>`;

        text += `</div></div>`;
        text += `<div class="tooltip__row"><div class="tooltip__radiogroup">`;

        if(classes.contains('text_spacing_xs'))
            text += `<div class="tooltip__radio tooltip__radio_active text_spacing_xs" data-class="text_spacing_xs">Aa</div>`;
        else text += `<div class="tooltip__radio text_spacing_xs" data-class="text_spacing_xs">Aa</div>`;

        if(classes.contains('text_spacing_s'))
            text += `<div class="tooltip__radio tooltip__radio_active text_spacing_s" data-class="text_spacing_s">Aa</div>`;
        else text += `<div class="tooltip__radio text_spacing_s" data-class="text_spacing_s">Aa</div>`;

        if(classes.contains('text_spacing_m'))
            text += `<div class="tooltip__radio tooltip__radio_active text_spacing_m" data-class="text_spacing_m">Aa</div>`;
        else text += `<div class="tooltip__radio text_spacing_m" data-class="text_spacing_m">Aa</div>`;

        text += `</div></div>`;
        text += `<div class="tooltip__row"><div class="tooltip__radiogroup">`;

        if(classes.contains('text_view_primary'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_primary" data-class="text_view_primary">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_primary" data-class="text_view_primary">Aa</div>`;

        if(classes.contains('text_view_secondary'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_secondary" data-class="text_view_secondary">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_secondary" data-class="text_view_secondary">Aa</div>`;

        if(classes.contains('text_view_ghost'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_ghost" data-class="text_view_ghost">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_ghost" data-class="text_view_ghost">Aa</div>`;

        if(classes.contains('text_view_link'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_link" data-class="text_view_link">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_link" data-class="text_view_link">Aa</div>`;

        if(classes.contains('text_view_link-minor'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_link-minor" data-class="text_view_link-minor">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_link-minor" data-class="text_view_link-minor">Aa</div>`;

        if(classes.contains('text_view_brand'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_brand" data-class="text_view_brand">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_brand" data-class="text_view_brand">Aa</div>`;

        if(classes.contains('text_view_success'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_success" data-class="text_view_success">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_success" data-class="text_view_success">Aa</div>`;

        if(classes.contains('text_view_warning'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_warning" data-class="text_view_warning">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_warning" data-class="text_view_warning">Aa</div>`;

        if(classes.contains('text_view_alert'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_view_alert" data-class="text_view_alert">Aa</div>`;
        else text += `<div class="tooltip__radio text text_view_alert" data-class="text_view_alert">Aa</div>`;

        text += `</div></div>`;
        text += `<div class="tooltip__row"><div class="tooltip__radiogroup">`;

        if(classes.contains('text_weight_thin'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_weight_thin" data-class="text_weight_thin">A</div>`;
        else text += `<div class="tooltip__radio text text_weight_thin" data-class="text_weight_thin">A</div>`;

        if(classes.contains('text_weight_light'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_weight_lign" data-class="text_weight_light">A</div>`;
        else text += `<div class="tooltip__radio text text_weight_light" data-class="text_weight_light">A</div>`;

        if(classes.contains('text_weight_regular'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_weight_regular" data-class="text_weight_regular">A</div>`;
        else text += `<div class="tooltip__radio text text_weight_regular" data-class="text_weight_regular">A</div>`;

        if(classes.contains('text_weight_semibold'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_weight_semibold" data-class="text_weight_semibold">A</div>`;
        else text += `<div class="tooltip__radio text text_weight_semibold" data-class="text_weight_semibold">A</div>`;

        if(classes.contains('text_weight_bold'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_weight_bold" data-class="text_weight_bold">A</div>`;
        else text += `<div class="tooltip__radio text text_weight_bold" data-class="text_weight_bold">A</div>`;

        if(classes.contains('text_weight_black'))
            text += `<div class="tooltip__radio tooltip__radio_active text text_weight_black" data-class="text_weight_black">A</div>`;
        else text += `<div class="tooltip__radio text text_weight_black" data-class="text_weight_black">A</div>`;

        text += `</div></div>`;

        return text;
    }

    bindTooltip = (parent) => {
        const RADIO_ACTIVE_CLASS = 'tooltip__radio_active';
        let tooltip = parent.querySelector('.tooltip');
        let controls = tooltip.querySelectorAll('.tooltip__radiogroup');

        controls.forEach(item => {
            let radios = item.querySelectorAll('.tooltip__radio');

            radios.forEach(radio => {
                radio.addEventListener('click', () => {
                    if(radio.classList.contains(RADIO_ACTIVE_CLASS)) {
                        let thisClass = radio.getAttribute('data-class');

                        parent.classList.remove(thisClass);
                        radio.classList.remove(RADIO_ACTIVE_CLASS);
                    } else {
                        let previous = item.querySelector(`.${RADIO_ACTIVE_CLASS}`);
                        let nextClass = radio.getAttribute('data-class');

                        if(previous) {
                            let prevClass = previous.getAttribute('data-class');
                            previous.classList.remove(RADIO_ACTIVE_CLASS);
                            parent.classList.remove(prevClass);
                        }

                        parent.classList.add(nextClass);
                        radio.classList.add(RADIO_ACTIVE_CLASS);
                    }
                });
            });
        });
    }

    let removeSelectedClass = () => {
        let selected = EDITOR_BLOCK.querySelector('.selected') || false;

        if (selected) selected.classList.remove('selected');
    }
}
