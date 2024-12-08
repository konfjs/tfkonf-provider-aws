import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsFsxOntapStorageVirtualMachineArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsFsxOntapStorageVirtualMachineArgs {
  filter?: DataAwsFsxOntapStorageVirtualMachineArgsFilter[];
}

export class data_aws_fsx_ontap_storage_virtual_machine extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsFsxOntapStorageVirtualMachineArgs) {
    const meta = {filter:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_fsx_ontap_storage_virtual_machine", resourceName);
  }

  get active_directory_configuration(): string {
    return `data.${this.resourceType}.${this.resourceName}.active_directory_configuration`;
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get endpoints(): string {
    return `data.${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get file_system_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_status(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_status`;
  }

  get lifecycle_transition_reason(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_transition_reason`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get subtype(): string {
    return `data.${this.resourceType}.${this.resourceName}.subtype`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get uuid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uuid`;
  }
}
