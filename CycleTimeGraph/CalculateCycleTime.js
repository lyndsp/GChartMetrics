function massageData() {
    var stories = getStoryData();
    
    var storyMetrics = [];

    while (stories.length > 0) {
        var story = stories.pop();

        if (story.Team == 1) {
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var cycleTime1 = Math.round(Math.abs((story.AcceptedDate.getTime() - story.StartDate.getTime()) / (oneDay)));
        };
        if (story.Team == 2) {
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
            var cycleTime2 = Math.round(Math.abs((story.AcceptedDate.getTime() - story.StartDate.getTime()) / (oneDay)));
        };


        storyMetrics.push(
            { AcceptedDate: story.AcceptedDate, CycleTime1: cycleTime1, CycleTime2: cycleTime2}
        );
    }

    return storyMetrics;
}
