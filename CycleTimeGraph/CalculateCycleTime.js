function massageData() {
    var stories = getStoryData();
    var storyMetrics = [];
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    while (stories.length > 0) {
        var story = stories.pop();

        var startDay = story.StartDate.getDay();
        
        var daysTotal = Math.round(Math.abs((story.AcceptedDate.getTime() - story.StartDate.getTime()) / (oneDay)));
        var daysInFirstWeek = Math.min ((7 - startDay), daysTotal);
        var workingDaysInBetween = Math.floor((daysTotal - daysInFirstWeek) / 7) * 5;
        var workingDaysInLastWeek = (daysTotal - daysInFirstWeek) % 7;
        if (workingDaysInBetween != 0 || workingDaysInLastWeek != 0) daysInFirstWeek -= 2;
        var cycleTime = daysInFirstWeek + workingDaysInBetween + workingDaysInLastWeek;





        if (story.Team == 1) {
            storyMetrics.push(
                { AcceptedDate: story.AcceptedDate, CycleTime: cycleTime, CycleTime1: cycleTime}
            );
        }
        else if (story.Team == 2) {
            storyMetrics.push(
                { AcceptedDate: story.AcceptedDate, CycleTime: cycleTime, CycleTime2: cycleTime}
            );
        };
    }

    return storyMetrics;
}
