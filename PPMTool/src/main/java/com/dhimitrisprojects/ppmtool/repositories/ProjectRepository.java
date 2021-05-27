package com.dhimitrisprojects.ppmtool.repositories;

import com.dhimitrisprojects.ppmtool.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
    
    Project findByProjectIdentifier(String projectId);



}
