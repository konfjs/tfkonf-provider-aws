import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamPrincipalPolicySimulationArgsContext {
  key: string;
  type: string;
  values: string[];
}

export interface DataAwsIamPrincipalPolicySimulationArgs {
  action_names: string[];
  additional_policies_json?: string[];
  caller_arn?: string;
  permissions_boundary_policies_json?: string[];
  policy_source_arn: string;
  resource_arns?: string[];
  resource_handling_option?: string;
  resource_owner_account_id?: string;
  resource_policy_json?: string;
  context?: DataAwsIamPrincipalPolicySimulationArgsContext[];
}

export class data_aws_iam_principal_policy_simulation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamPrincipalPolicySimulationArgs) {
    const meta = {context:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_iam_principal_policy_simulation", resourceName);
  }

  get action_names(): string {
    return `data.${this.resourceType}.${this.resourceName}.action_names`;
  }

  get all_allowed(): string {
    return `data.${this.resourceType}.${this.resourceName}.all_allowed`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_source_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_source_arn`;
  }

  get results(): string {
    return `data.${this.resourceType}.${this.resourceName}.results`;
  }
}
