import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBackupFrameworkArgsControlInputParameter {
  name?: string;
  value?: string;
}

export interface AwsBackupFrameworkArgsControlScope {
  tags?: { [key: string]: string };
}

export interface AwsBackupFrameworkArgsControl {
  name: string;
  input_parameter?: AwsBackupFrameworkArgsControlInputParameter[];
  scope?: AwsBackupFrameworkArgsControlScope;
}

export interface AwsBackupFrameworkArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBackupFrameworkArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  control: AwsBackupFrameworkArgsControl[];
  timeouts?: AwsBackupFrameworkArgsTimeouts;
}

export class aws_backup_framework extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBackupFrameworkArgs) {
    const meta = {control:{isBlock:true,input_parameter:{isBlock:true},scope:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_backup_framework", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get creation_time(): string {
    return `${this.resourceType}.${this.resourceName}.creation_time`;
  }

  get deployment_status(): string {
    return `${this.resourceType}.${this.resourceName}.deployment_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
