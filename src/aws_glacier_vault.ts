import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsGlacierVaultArgsNotification {
  events: string[];
  sns_topic: string;
}

export interface AwsGlacierVaultArgs {
  access_policy?: string;
  name: string;
  tags?: { [key: string]: string };
  notification?: AwsGlacierVaultArgsNotification;
}

export class aws_glacier_vault extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsGlacierVaultArgs) {
    const meta = {notification:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_glacier_vault", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
