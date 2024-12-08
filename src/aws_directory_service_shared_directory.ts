import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceSharedDirectoryArgsTarget {
  id: string;
  type?: string;
}

export interface AwsDirectoryServiceSharedDirectoryArgsTimeouts {
  delete?: string;
}

export interface AwsDirectoryServiceSharedDirectoryArgs {
  directory_id: string;
  method?: string;
  notes?: string;
  target: AwsDirectoryServiceSharedDirectoryArgsTarget;
  timeouts?: AwsDirectoryServiceSharedDirectoryArgsTimeouts;
}

export class aws_directory_service_shared_directory extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDirectoryServiceSharedDirectoryArgs) {
    const meta = {target:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_shared_directory", resourceName);
  }

  get directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.directory_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get shared_directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.shared_directory_id`;
  }
}
