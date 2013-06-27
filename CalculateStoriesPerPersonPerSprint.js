function massageData() {
    var stories = getStoryData();

    var today = new Date(2013, 5, 11);
    //var today = new Date();
    var nextSprintDate = new Date(2013, 4, 13);
    var sprints = [];
    var teamSizeData = getTeamData();

    while (nextSprintDate < today) {
      var startDate = new Date(nextSprintDate.toDateString());
      nextSprintDate.setDate(nextSprintDate.getDate() + 14);

      var finishDate = new Date(nextSprintDate.toDateString());
      finishDate.setDate(finishDate.getDate() - 1);
      
      var sprint = { 
            StartDate: startDate,
            EndDate: finishDate,
            TeamSize: 0
          };

      var sprintTeamSize = 0;

      for (teamSizeIndex = 0; teamSizeIndex < teamSizeData.length; teamSizeIndex++) {
          var teamSize = teamSizeData[teamSizeIndex];

          if (teamSize.Date <= sprint.EndDate) {
              sprint.TeamSize = teamSize.TeamSize;
          }
      }
      
      sprints.push(sprint);        
    }

    var sprintData = [];

    while (sprints.length > 0) {
        var currentSprint = sprints.pop();
        var storiesInSprint = 0;

        for (storyIndex = 0; storyIndex < stories.length; storyIndex++) {
            var story = stories[storyIndex];
            if (story.AcceptedDate >= currentSprint.StartDate && story.AcceptedDate <= currentSprint.EndDate) {
                storiesInSprint++;
            }
        }

        var storiesPerPerson = currentSprint.TeamSize == 0 ? 0 : storiesInSprint / currentSprint.TeamSize;

        sprintData.push(
            { StartDate: currentSprint.StartDate, StoriesInSprint: storiesInSprint, StoriesPerPerson: storiesPerPerson }
        );
    }

    return sprintData;
}
