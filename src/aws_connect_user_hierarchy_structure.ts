import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFive {
  name: string;
}

export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFour {
  name: string;
}

export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelOne {
  name: string;
}

export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelThree {
  name: string;
}

export interface AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelTwo {
  name: string;
}

export interface AwsConnectUserHierarchyStructureArgsHierarchyStructure {
  level_five?: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFive;
  level_four?: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelFour;
  level_one?: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelOne;
  level_three?: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelThree;
  level_two?: AwsConnectUserHierarchyStructureArgsHierarchyStructureLevelTwo;
}

export interface AwsConnectUserHierarchyStructureArgs {
  instance_id: string;
  hierarchy_structure: AwsConnectUserHierarchyStructureArgsHierarchyStructure;
}

export class aws_connect_user_hierarchy_structure extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsConnectUserHierarchyStructureArgs) {
    const meta = {hierarchy_structure:{isBlock:true,level_five:{isBlock:true},level_four:{isBlock:true},level_one:{isBlock:true},level_three:{isBlock:true},level_two:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_connect_user_hierarchy_structure", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }
}
