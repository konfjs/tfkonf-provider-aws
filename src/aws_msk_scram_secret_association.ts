import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskScramSecretAssociationArgs {
  cluster_arn: string;
  secret_arn_list: string[];
}

export class aws_msk_scram_secret_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsMskScramSecretAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_msk_scram_secret_association", resourceName);
  }

  get cluster_arn(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get secret_arn_list(): string {
    return `${this.resourceType}.${this.resourceName}.secret_arn_list`;
  }
}
