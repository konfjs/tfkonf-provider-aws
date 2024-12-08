import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceSharedDirectoryAccepterArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsDirectoryServiceSharedDirectoryAccepterArgs {
  shared_directory_id: string;
  timeouts?: AwsDirectoryServiceSharedDirectoryAccepterArgsTimeouts;
}

export class aws_directory_service_shared_directory_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsDirectoryServiceSharedDirectoryAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_shared_directory_accepter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get method(): string {
    return `${this.resourceType}.${this.resourceName}.method`;
  }

  get notes(): string {
    return `${this.resourceType}.${this.resourceName}.notes`;
  }

  get owner_account_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_account_id`;
  }

  get owner_directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.owner_directory_id`;
  }

  get shared_directory_id(): string {
    return `${this.resourceType}.${this.resourceName}.shared_directory_id`;
  }
}
