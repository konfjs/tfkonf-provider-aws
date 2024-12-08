import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
  dns_ips: string[];
  domain_name: string;
  file_system_administrators_group?: string;
  organizational_unit_distinguished_name?: string;
  password: string;
  username: string;
}

export interface AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfiguration {
  netbios_name?: string;
  self_managed_active_directory_configuration?: AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}

export interface AwsFsxOntapStorageVirtualMachineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsFsxOntapStorageVirtualMachineArgs {
  file_system_id: string;
  name: string;
  root_volume_security_style?: string;
  svm_admin_password?: string;
  tags?: { [key: string]: string };
  active_directory_configuration?: AwsFsxOntapStorageVirtualMachineArgsActiveDirectoryConfiguration;
  timeouts?: AwsFsxOntapStorageVirtualMachineArgsTimeouts;
}

export class aws_fsx_ontap_storage_virtual_machine extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsFsxOntapStorageVirtualMachineArgs) {
    const meta = {active_directory_configuration:{isBlock:true,self_managed_active_directory_configuration:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_fsx_ontap_storage_virtual_machine", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get file_system_id(): string {
    return `${this.resourceType}.${this.resourceName}.file_system_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get subtype(): string {
    return `${this.resourceType}.${this.resourceName}.subtype`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uuid(): string {
    return `${this.resourceType}.${this.resourceName}.uuid`;
  }
}
