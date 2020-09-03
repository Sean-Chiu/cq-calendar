Page({

    data: {
        year: new Date().getFullYear(),      // 年份
        month: new Date().getMonth() + 1,    // 月份
        day: new Date().getDate(),           // 日期
        header: true,                        // 日历标题
        lunar: true,                        // 显示农历
        more: true,                          // 显示非当前月日期                
        week_title: true,                    // 显示周标题
        next: true,                          // 显示下个月
        prev: true,                          // 显示上个月
        cs: 60,                              // 单元格大小
        title_type: 'cn',                    // 周标题类型
        titleType: ['英文单字母', '英语简写', '中文简写'],
        title_index: 0,
        style: [],
        activeType: '', // 日期背景效果
        days_addon: []
    },

    onLoad: function () {

        //样式
        this.setData({
            style: [
                { date:'2020-08-31' , other:'', otherColor:'#4ECA8E',badgeColor:'#4ECA8E', background: 'rgba(59,139,242,0.1)' },
                { date:'2020-09-02' , color:'#fff', other:'未完成', otherColor:'#4ECA8E',badgeColor:'#4ECA8E', background: 'rgba(59,139,242,0.1)', selectedColor:'#4C8AF6'},
                { date:'2020-09-03' ,other:'3',other:'已完成',otherColor:'#4ECA8E', badgeColor:'#4ECA8E', background: 'rgba(59,139,242,0.1)' },
                { date:'2020-09-04' ,other:'3',other:'已完成',otherColor:'#4ECA8E', badgeColor:'#4ECA8E', background: 'rgba(59,139,242,0.1)' },
                { date:'2020-10-01' ,other:'3',other:'已完成',otherColor:'#4ECA8E', badgeColor:'#4ECA8E', background: 'rgba(59,139,242,0.1)' }
            ]
        });

    },


    /**
     * 点击下个月
     */
    nextMonth: function (event) {
        const currentYear = event.detail.currentYear;
        const currentMonth = event.detail.currentMonth;
        const prevMonth = event.detail.prevMonth;
        const prevYear = event.detail.prevYear;
        // wx.showModal({
        //     title: '点击下个月事件',
        //     content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月\n之前年份：' + prevYear + '年\n之前月份：' + prevMonth + '月'
        // });


    },

    /**
     * 点击上个月
     */
    prevMonth: function (event) {
        console.log(event);
        const currentYear = event.detail.currentYear;
        const currentMonth = event.detail.currentMonth;
        const prevMonth = event.detail.prevMonth;
        const prevYear = event.detail.prevYear;
        // wx.showModal({
        //     title: '点击上个月事件',
        //     content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月\n之前年份：' + prevYear + '年\n之前月份：' + prevMonth + '月'
        // });


    },

    /**
     * 日期变更事件
     */
    dateChange: function (event) {

        const currentYear = event.detail.currentYear;
        const currentMonth = event.detail.currentMonth;
        const prevMonth = event.detail.prevMonth;
        const prevYear = event.detail.prevYear;

        // wx.showModal({
        //     title: '日期选择器事件',
        //     content: '当前年份：' + currentYear + '年\n当前月份：' + currentMonth + '月\n之前年份：' + prevYear + '年\n之前月份：' + prevMonth + '月'
        // });

    },

    dayClick: function (event) {
        const year = event.detail.year;
        const month = event.detail.month;
        const day = event.detail.day;
        const color = event.detail.color;
        const lunarMonth = event.detail.lunarMonth;
        const lunarDay = event.detail.lunarDay;
        const background = event.detail.background;

        // wx.showModal({
        //     title: '日期点击事件',
        //     content: '点击的日期为：' + year + '年' + month + '月' + day + '日\n农历：' + lunarMonth + lunarDay
        // });
    }

})