//var txtTest = "";
//document.addEventListener('DOMContentLoaded', function() {
var calendarEl = document.getElementById('mycalendarEdit');

// var calendar = new FullCalendar.Calendar(calendarEl, {
//   plugins: [ 'dayGrid' ]
// });

var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'interaction', 'dayGrid','momentTimezone','moment','bootstrap','list','timeGrid' ],
  //schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
  //plugins: [ 'interaction', 'resourceTimeline' ],
  aspectRatio: 1.5,
  header:{
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,listMonth,timeGridWeek'
    //right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
  },
  defaultView: 'dayGridMonth',
  //defaultView: 'resourceTimelineDay',
  selectable: true,
  editable: true,
  resourceLabelText: 'Rooms',
  timezone: "Asia/Bangkok",
  locale:'th',
  eventTimeFormat: { // รูปแบบการแสดงของเวลา เช่น '14:30' 
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false
            },
  //resources: 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
  //events: 'https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline',
  eventClick: function(info) {
    info.jsEvent.preventDefault(); // don't let the browser navigate

    if (info.event.url) {
      window.open(info.event.url);
    }
  },
});

calendar.render();
//});