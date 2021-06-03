package com.dhimitrisprojects.ppmtool.services;

import com.dhimitrisprojects.ppmtool.domain.Backlog;
import com.dhimitrisprojects.ppmtool.domain.ProjectTask;
import com.dhimitrisprojects.ppmtool.repositories.BacklogRepository;
import com.dhimitrisprojects.ppmtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){

        // Project Tasks to be added to a specific project, project != null, Backlog exists
        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);
        //Set the Project Task to a Backlog
        projectTask.setBacklog(backlog);
        //Project Sequence -> ID01-1 ID01-2 etc...
        Integer BacklogSequence = backlog.getPTSequence();
        //Increment the Sequence
        BacklogSequence++;
        backlog.setPTSequence(BacklogSequence);
        //Add Sequence to Project Task
        projectTask.setProjectSequence(projectIdentifier+"-"+BacklogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);
        //Initial priority when null
        if(projectTask.getPriority()==null) {
          projectTask.setPriority(3);
        }
        //Initial status when nulll
        if(projectTask.getStatus()==""|| projectTask.getStatus()==null){
            projectTask.setStatus("TO_DO");
        }

        return projectTaskRepository.save(projectTask);

    }
}
