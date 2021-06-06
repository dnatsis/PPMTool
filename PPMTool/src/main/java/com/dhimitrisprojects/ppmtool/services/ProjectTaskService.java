package com.dhimitrisprojects.ppmtool.services;

import com.dhimitrisprojects.ppmtool.domain.Backlog;
import com.dhimitrisprojects.ppmtool.domain.Project;
import com.dhimitrisprojects.ppmtool.domain.ProjectTask;
import com.dhimitrisprojects.ppmtool.exceptions.ProjectNotFoundException;
import com.dhimitrisprojects.ppmtool.repositories.BacklogRepository;
import com.dhimitrisprojects.ppmtool.repositories.ProjectRepository;
import com.dhimitrisprojects.ppmtool.repositories.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask){
        try {
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

        } catch (Exception e) {
            throw new ProjectNotFoundException("Project not Found!");
        }


    }

    public Iterable<ProjectTask>findBacklogById(String backlog_id) {

        Project project = projectRepository.findByProjectIdentifier(backlog_id);

        if(project==null){
            throw new ProjectNotFoundException("Project With ID: '"+backlog_id+"' does not exist");
        }

        return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlog_id);
    }

    public ProjectTask findProjectTaskByProjectSequence(String backlog_id,String pt_id){
        //make sure were looking in the correct backlog
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlog_id);
        if(backlog==null){
            throw new ProjectNotFoundException("Project with ID: '"+backlog_id+" does not exist");
        }

        //make sure task exists
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);

        if(projectTask==null){
            throw new ProjectNotFoundException("Project Task: '"+pt_id+"' not found");
        }

        //make sure project id in path is for the right project
        if(!projectTask.getProjectIdentifier().equals(backlog_id)){
            throw new ProjectNotFoundException("Project Task: '"+pt_id+"' does not exist in project: '"+backlog_id);
        }

        return projectTask;
    }

    public ProjectTask updateProjectTaskByProjectSequence(ProjectTask updatedTask, String backlog_id, String pt_id) {
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id,pt_id);

        projectTask = updatedTask;

        return projectTaskRepository.save(projectTask);
    }

    public void deleteProjectTaskByProjectSequence(String backlog_id, String pt_id) {
        ProjectTask projectTask = findProjectTaskByProjectSequence(backlog_id,pt_id);

        projectTaskRepository.delete(projectTask);
    }

}
