import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailActionIncludeResources {
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailAction {
  type: string;
  include_resources?: AwsImagebuilderLifecyclePolicyArgsPolicyDetailActionIncludeResources[];
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmisLastLaunched {
  unit: string;
  value: number;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmis {
  is_public?: boolean;
  regions?: string[];
  shared_accounts?: string[];
  tag_map?: { [key: string]: string };
  last_launched?: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmisLastLaunched[];
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRules {
  tag_map?: { [key: string]: string };
  amis?: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRulesAmis[];
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetailFilter {
  retain_at_least?: number;
  type: string;
  unit?: string;
  value: number;
}

export interface AwsImagebuilderLifecyclePolicyArgsPolicyDetail {
  action?: AwsImagebuilderLifecyclePolicyArgsPolicyDetailAction[];
  exclusion_rules?: AwsImagebuilderLifecyclePolicyArgsPolicyDetailExclusionRules[];
  filter?: AwsImagebuilderLifecyclePolicyArgsPolicyDetailFilter[];
}

export interface AwsImagebuilderLifecyclePolicyArgsResourceSelectionRecipe {
  name: string;
  semantic_version: string;
}

export interface AwsImagebuilderLifecyclePolicyArgsResourceSelection {
  tag_map?: { [key: string]: string };
  recipe?: AwsImagebuilderLifecyclePolicyArgsResourceSelectionRecipe[];
}

export interface AwsImagebuilderLifecyclePolicyArgs {
  description?: string;
  execution_role: string;
  name: string;
  resource_type: string;
  tags?: { [key: string]: string };
  policy_detail?: AwsImagebuilderLifecyclePolicyArgsPolicyDetail[];
  resource_selection?: AwsImagebuilderLifecyclePolicyArgsResourceSelection[];
}

export class aws_imagebuilder_lifecycle_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsImagebuilderLifecyclePolicyArgs) {
    const meta = {policy_detail:{isBlock:true,action:{isBlock:true,include_resources:{isBlock:true}},exclusion_rules:{isBlock:true,amis:{isBlock:true,last_launched:{isBlock:true}}},filter:{isBlock:true}},resource_selection:{isBlock:true,recipe:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_imagebuilder_lifecycle_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get execution_role(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
