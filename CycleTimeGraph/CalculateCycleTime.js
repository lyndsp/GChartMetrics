function massageData() {
    var stories = getStoryData();
    
    var storyMetrics = [];

    while (stories.length > 0) {
        var story = stories.pop();

        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var cycleTime = Math.round(Math.abs((story.AcceptedDate.getTime() - story.StartDate.getTime()) / (oneDay)));

        storyMetrics.push(
            { AcceptedDate: story.AcceptedDate, CycleTime: cycleTime }
        );
    }

    return storyMetrics;
}
