import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsMskBootstrapBrokersArgs {
  cluster_arn: string;
}

export class data_aws_msk_bootstrap_brokers extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsMskBootstrapBrokersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_msk_bootstrap_brokers", resourceName);
  }

  get bootstrap_brokers(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers`;
  }

  get bootstrap_brokers_public_sasl_iam(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_sasl_iam`;
  }

  get bootstrap_brokers_public_sasl_scram(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_sasl_scram`;
  }

  get bootstrap_brokers_public_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_public_tls`;
  }

  get bootstrap_brokers_sasl_iam(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_sasl_iam`;
  }

  get bootstrap_brokers_sasl_scram(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_sasl_scram`;
  }

  get bootstrap_brokers_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_tls`;
  }

  get bootstrap_brokers_vpc_connectivity_sasl_iam(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_vpc_connectivity_sasl_iam`;
  }

  get bootstrap_brokers_vpc_connectivity_sasl_scram(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_vpc_connectivity_sasl_scram`;
  }

  get bootstrap_brokers_vpc_connectivity_tls(): string {
    return `data.${this.resourceType}.${this.resourceName}.bootstrap_brokers_vpc_connectivity_tls`;
  }

  get cluster_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.cluster_arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }
}
