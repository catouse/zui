import '@zui/button';
import '@zui/input';
import '@zui/form';
import {BtnGroup} from '@zui/btn-group/src/main';
import 'zui-dev';
import {Datetimepicker} from './src/vanilla';
import './src/style/index.css';

onPageUpdate(() => {
    const datePicker1 = document.getElementById('datePicker1');
    datePicker1.querySelector('.form-control').value = '2022-12-12';
    new Datetimepicker('#datePicker1', {
        date: '2022-12-12',
        onChange: (newDate) => {
            datePicker1.querySelector('.form-control').value = newDate;
        },
    });
    const datePicker3 = document.getElementById('datePicker3');
    new Datetimepicker('#datePicker3', {
        showOtherMonth: false,
        onChange: (newDate) => {
            datePicker3.querySelector('.form-control').value = newDate;
        },
    });
    const datePicker4 = document.getElementById('datePicker4');
    new Datetimepicker('#datePicker4', {
        minDate: '2022-12-02',
        maxDate: '2022-12-30',
        onChange: (newDate) => {
            datePicker4.querySelector('.form-control').value = newDate;
        },
    });
    const datePicker5 = document.getElementById('datePicker5');
    new Datetimepicker('#datePicker5', {
        minYear: 2020,
        maxYear: 2023,
        onChange: (newDate) => {
            datePicker5.querySelector('.form-control').value = newDate;
        },
    });
    const datePicker6 = document.getElementById('datePicker6');
    new Datetimepicker('#datePicker6', {
        tagDate: ['2022-12-24', '2022-12-25'],
        onChange: (newDate) => {
            datePicker6.querySelector('.form-control').value = newDate;
        },
    });
    const datePicker8 = document.getElementById('datePicker8');
    const datePickerComponent = new Datetimepicker('#datePicker8', {
        placement: 'top-end',
        onChange: (newDate) => {
            datePicker8.querySelector('.form-control').value = newDate;
        },
    });
    new BtnGroup('#btnGroupPlacement', {
        items: [
            {text: 'auto'},
            {text: 'top-start'},
            {text: 'top-end'},
            {text: 'bottom-start'},
            {text: 'bottom-end'},
        ],
        onClickItem: (info) => {
            const fElement = info.event.target.closest('.btn-group');
            const btns = fElement.querySelectorAll('.btn');
            btns.forEach(element => {
                element.classList.remove('primary');
            });
            info.event.target.classList.toggle('primary');
            datePickerComponent.render({placement: info.item.text});
        },
    });
});
