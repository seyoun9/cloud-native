package cloud_app.cloud_back.service;

import java.util.List;

import org.springframework.stereotype.Service;

import cloud_app.cloud_back.dto.EmployeeDto;

@Service
public interface  EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Integer employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Integer employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(Integer employeeId);

}
