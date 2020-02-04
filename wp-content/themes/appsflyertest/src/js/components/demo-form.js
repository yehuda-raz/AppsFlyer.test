
import validator from 'validator';


const langList = ['ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-QA', 'ar-QM', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE', 'bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'en-AU', 'en-GB', 'en-HK', 'en-IN', 'en-NZ', 'en-US', 'en-ZA', 'en-ZM', 'es-ES', 'fr-FR', 'fa-IR', 'he', 'hu-HU', 'it-IT', 'ku-IQ', 'nb-NO', 'nl-NL', 'nn-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ru-RU', 'sl-SI', 'sk-SK', 'sr-RS', 'sr-RS@latin', 'sv-SE', 'tr-TR', 'uk-UA'];

const checkValidator = (type, value) => {
    switch (type) {
        case 'string':
            for (let index = 0; index < langList.length; index++) {
                if (validator.isAlphanumeric(value.replace(/\s/g, ''), langList[index])) {
                    return true
                }
            }
            return false

        case 'name':
            for (let index = 0; index < langList.length; index++) {
                if (validator.isAlpha(value.replace(/\s/g, ''), langList[index])) {
                    return true
                }
            }
            return false

        case 'email':
            return !!(value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))

        case 'tel':
            return (!!(value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/))) && value.length > 5

        case 'url':
            return !!(value.match(/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/));

        case 'check':
            return value

        default:
            return true;
    }
}


jQuery(document).ready(($) => {

    $('.typing input').click((e) => {
        $(e.target).parent().find('.typing-area').fadeOut(100);
    })

    $('.typing-area').click((e) => {
        $(e.target).fadeOut(100);
        $(e.target).parent().find('input').focus();
    })


    const uiValidator = (element, isvalid) => {
        if (isvalid) {
            $(element).removeClass('alert-danger');
            return true
        }
        else {
            $(element).addClass('alert-danger')
            return false
        }
    }

    const isFiledValid = (element) => {
        const fieldType = $(element).attr('data-validator')
        const fieldText = element.value.trim()
        const isvalid = checkValidator(fieldType, fieldText);
        return uiValidator(element, isvalid)
    }

    $('#demo-user-form #agree').change((e) => {
        if ($(e.target).attr('checked')) {
            $(e.target).val('TRUE');
        } else {
            $(e.target).val('');
        }
        isFiledValid(e.target)
    });


    $('#demo-user-form input').keyup((e) => {
        isFiledValid(e.target)
    })

    $("#event_demo_api").on("submit", (e) => {
        e.preventDefault();

        let formPassVaildation = true;
        $(e.target).find('input').each((index, element) => {
            const inputPassVaildation = isFiledValid(element)
            if (!inputPassVaildation) {
                formPassVaildation = false;
            }
        });

        if (formPassVaildation) {

            const formData = $(e.target).serialize();
            debugger;

            $('.loader-div').css("display", "flex")
                .hide()
                .fadeIn(100);

            $.ajax({
                url: wp_global.ajax_url,
                type: 'POST',
                dataType: "json",
                data: {
                    action: 'demo_hook',
                    form_data: formData
                },
                success: function (resp) {
                    if (resp.success) {
                        console.log('success: ' + resp.data);
                        $('.loader-div').css('display', 'none');
                        $('#confirm_msg').css("display", "flex")
                            .hide()
                            .fadeIn();

                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert('Request failed: ' + resp.data);
                    $('.loader-div').css('display', 'none');
                },
            });
        }

    });





});


