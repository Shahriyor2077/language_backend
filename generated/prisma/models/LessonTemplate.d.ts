import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LessonTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonTemplatePayload>;
export type AggregateLessonTemplate = {
    _count: LessonTemplateCountAggregateOutputType | null;
    _min: LessonTemplateMinAggregateOutputType | null;
    _max: LessonTemplateMaxAggregateOutputType | null;
};
export type LessonTemplateMinAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    name: string | null;
    timeSlot: string | null;
    isActive: boolean | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonTemplateMaxAggregateOutputType = {
    id: string | null;
    teacherId: string | null;
    name: string | null;
    timeSlot: string | null;
    isActive: boolean | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonTemplateCountAggregateOutputType = {
    id: number;
    teacherId: number;
    name: number;
    timeSlot: number;
    isActive: number;
    isDeleted: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LessonTemplateMinAggregateInputType = {
    id?: true;
    teacherId?: true;
    name?: true;
    timeSlot?: true;
    isActive?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonTemplateMaxAggregateInputType = {
    id?: true;
    teacherId?: true;
    name?: true;
    timeSlot?: true;
    isActive?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonTemplateCountAggregateInputType = {
    id?: true;
    teacherId?: true;
    name?: true;
    timeSlot?: true;
    isActive?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LessonTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonTemplateWhereInput;
    orderBy?: Prisma.LessonTemplateOrderByWithRelationInput | Prisma.LessonTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LessonTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonTemplateCountAggregateInputType;
    _min?: LessonTemplateMinAggregateInputType;
    _max?: LessonTemplateMaxAggregateInputType;
};
export type GetLessonTemplateAggregateType<T extends LessonTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonTemplate[P]> : Prisma.GetScalarType<T[P], AggregateLessonTemplate[P]>;
};
export type LessonTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonTemplateWhereInput;
    orderBy?: Prisma.LessonTemplateOrderByWithAggregationInput | Prisma.LessonTemplateOrderByWithAggregationInput[];
    by: Prisma.LessonTemplateScalarFieldEnum[] | Prisma.LessonTemplateScalarFieldEnum;
    having?: Prisma.LessonTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonTemplateCountAggregateInputType | true;
    _min?: LessonTemplateMinAggregateInputType;
    _max?: LessonTemplateMaxAggregateInputType;
};
export type LessonTemplateGroupByOutputType = {
    id: string;
    teacherId: string;
    name: string;
    timeSlot: string;
    isActive: boolean;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LessonTemplateCountAggregateOutputType | null;
    _min: LessonTemplateMinAggregateOutputType | null;
    _max: LessonTemplateMaxAggregateOutputType | null;
};
type GetLessonTemplateGroupByPayload<T extends LessonTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonTemplateGroupByOutputType[P]>;
}>>;
export type LessonTemplateWhereInput = {
    AND?: Prisma.LessonTemplateWhereInput | Prisma.LessonTemplateWhereInput[];
    OR?: Prisma.LessonTemplateWhereInput[];
    NOT?: Prisma.LessonTemplateWhereInput | Prisma.LessonTemplateWhereInput[];
    id?: Prisma.StringFilter<"LessonTemplate"> | string;
    teacherId?: Prisma.StringFilter<"LessonTemplate"> | string;
    name?: Prisma.StringFilter<"LessonTemplate"> | string;
    timeSlot?: Prisma.StringFilter<"LessonTemplate"> | string;
    isActive?: Prisma.BoolFilter<"LessonTemplate"> | boolean;
    isDeleted?: Prisma.BoolFilter<"LessonTemplate"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"LessonTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonTemplate"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
};
export type LessonTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
};
export type LessonTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LessonTemplateWhereInput | Prisma.LessonTemplateWhereInput[];
    OR?: Prisma.LessonTemplateWhereInput[];
    NOT?: Prisma.LessonTemplateWhereInput | Prisma.LessonTemplateWhereInput[];
    teacherId?: Prisma.StringFilter<"LessonTemplate"> | string;
    name?: Prisma.StringFilter<"LessonTemplate"> | string;
    timeSlot?: Prisma.StringFilter<"LessonTemplate"> | string;
    isActive?: Prisma.BoolFilter<"LessonTemplate"> | boolean;
    isDeleted?: Prisma.BoolFilter<"LessonTemplate"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"LessonTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonTemplate"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
}, "id">;
export type LessonTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonTemplateCountOrderByAggregateInput;
    _max?: Prisma.LessonTemplateMaxOrderByAggregateInput;
    _min?: Prisma.LessonTemplateMinOrderByAggregateInput;
};
export type LessonTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonTemplateScalarWhereWithAggregatesInput | Prisma.LessonTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonTemplateScalarWhereWithAggregatesInput | Prisma.LessonTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LessonTemplate"> | string;
    teacherId?: Prisma.StringWithAggregatesFilter<"LessonTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"LessonTemplate"> | string;
    timeSlot?: Prisma.StringWithAggregatesFilter<"LessonTemplate"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"LessonTemplate"> | boolean;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"LessonTemplate"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LessonTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LessonTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LessonTemplate"> | Date | string;
};
export type LessonTemplateCreateInput = {
    id?: string;
    name: string;
    timeSlot: string;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher: Prisma.TeacherCreateNestedOneWithoutLessonTemplatesInput;
};
export type LessonTemplateUncheckedCreateInput = {
    id?: string;
    teacherId: string;
    name: string;
    timeSlot: string;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutLessonTemplatesNestedInput;
};
export type LessonTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonTemplateCreateManyInput = {
    id?: string;
    teacherId: string;
    name: string;
    timeSlot: string;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonTemplateListRelationFilter = {
    every?: Prisma.LessonTemplateWhereInput;
    some?: Prisma.LessonTemplateWhereInput;
    none?: Prisma.LessonTemplateWhereInput;
};
export type LessonTemplateOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    timeSlot?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonTemplateCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonTemplateCreateWithoutTeacherInput, Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput> | Prisma.LessonTemplateCreateWithoutTeacherInput[] | Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput | Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonTemplateCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
};
export type LessonTemplateUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonTemplateCreateWithoutTeacherInput, Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput> | Prisma.LessonTemplateCreateWithoutTeacherInput[] | Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput | Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonTemplateCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
};
export type LessonTemplateUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonTemplateCreateWithoutTeacherInput, Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput> | Prisma.LessonTemplateCreateWithoutTeacherInput[] | Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput | Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonTemplateUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonTemplateUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonTemplateCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    disconnect?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    delete?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    connect?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    update?: Prisma.LessonTemplateUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonTemplateUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonTemplateUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonTemplateUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonTemplateScalarWhereInput | Prisma.LessonTemplateScalarWhereInput[];
};
export type LessonTemplateUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonTemplateCreateWithoutTeacherInput, Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput> | Prisma.LessonTemplateCreateWithoutTeacherInput[] | Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput | Prisma.LessonTemplateCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonTemplateUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonTemplateUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonTemplateCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    disconnect?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    delete?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    connect?: Prisma.LessonTemplateWhereUniqueInput | Prisma.LessonTemplateWhereUniqueInput[];
    update?: Prisma.LessonTemplateUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonTemplateUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonTemplateUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonTemplateUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonTemplateScalarWhereInput | Prisma.LessonTemplateScalarWhereInput[];
};
export type LessonTemplateCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    timeSlot: string;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonTemplateUncheckedCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    timeSlot: string;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonTemplateCreateOrConnectWithoutTeacherInput = {
    where: Prisma.LessonTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonTemplateCreateWithoutTeacherInput, Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput>;
};
export type LessonTemplateCreateManyTeacherInputEnvelope = {
    data: Prisma.LessonTemplateCreateManyTeacherInput | Prisma.LessonTemplateCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type LessonTemplateUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonTemplateWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonTemplateUpdateWithoutTeacherInput, Prisma.LessonTemplateUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.LessonTemplateCreateWithoutTeacherInput, Prisma.LessonTemplateUncheckedCreateWithoutTeacherInput>;
};
export type LessonTemplateUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonTemplateWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonTemplateUpdateWithoutTeacherInput, Prisma.LessonTemplateUncheckedUpdateWithoutTeacherInput>;
};
export type LessonTemplateUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.LessonTemplateScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonTemplateUpdateManyMutationInput, Prisma.LessonTemplateUncheckedUpdateManyWithoutTeacherInput>;
};
export type LessonTemplateScalarWhereInput = {
    AND?: Prisma.LessonTemplateScalarWhereInput | Prisma.LessonTemplateScalarWhereInput[];
    OR?: Prisma.LessonTemplateScalarWhereInput[];
    NOT?: Prisma.LessonTemplateScalarWhereInput | Prisma.LessonTemplateScalarWhereInput[];
    id?: Prisma.StringFilter<"LessonTemplate"> | string;
    teacherId?: Prisma.StringFilter<"LessonTemplate"> | string;
    name?: Prisma.StringFilter<"LessonTemplate"> | string;
    timeSlot?: Prisma.StringFilter<"LessonTemplate"> | string;
    isActive?: Prisma.BoolFilter<"LessonTemplate"> | boolean;
    isDeleted?: Prisma.BoolFilter<"LessonTemplate"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"LessonTemplate"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonTemplate"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonTemplate"> | Date | string;
};
export type LessonTemplateCreateManyTeacherInput = {
    id?: string;
    name: string;
    timeSlot: string;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonTemplateUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonTemplateUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonTemplateUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    timeSlot?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    name?: boolean;
    timeSlot?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonTemplate"]>;
export type LessonTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    name?: boolean;
    timeSlot?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonTemplate"]>;
export type LessonTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    teacherId?: boolean;
    name?: boolean;
    timeSlot?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonTemplate"]>;
export type LessonTemplateSelectScalar = {
    id?: boolean;
    teacherId?: boolean;
    name?: boolean;
    timeSlot?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LessonTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "teacherId" | "name" | "timeSlot" | "isActive" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["lessonTemplate"]>;
export type LessonTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type LessonTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type LessonTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
};
export type $LessonTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonTemplate";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        teacherId: string;
        name: string;
        timeSlot: string;
        isActive: boolean;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lessonTemplate"]>;
    composites: {};
};
export type LessonTemplateGetPayload<S extends boolean | null | undefined | LessonTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload, S>;
export type LessonTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonTemplateCountAggregateInputType | true;
};
export interface LessonTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonTemplate'];
        meta: {
            name: 'LessonTemplate';
        };
    };
    findUnique<T extends LessonTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, LessonTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonTemplateCreateArgs>(args: Prisma.SelectSubset<T, LessonTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonTemplateDeleteArgs>(args: Prisma.SelectSubset<T, LessonTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonTemplateUpdateArgs>(args: Prisma.SelectSubset<T, LessonTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonTemplateUpsertArgs>(args: Prisma.SelectSubset<T, LessonTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonTemplateClient<runtime.Types.Result.GetResult<Prisma.$LessonTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonTemplateCountArgs>(args?: Prisma.Subset<T, LessonTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonTemplateCountAggregateOutputType> : number>;
    aggregate<T extends LessonTemplateAggregateArgs>(args: Prisma.Subset<T, LessonTemplateAggregateArgs>): Prisma.PrismaPromise<GetLessonTemplateAggregateType<T>>;
    groupBy<T extends LessonTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonTemplateGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonTemplateFieldRefs;
}
export interface Prisma__LessonTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"LessonTemplate", 'String'>;
    readonly teacherId: Prisma.FieldRef<"LessonTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"LessonTemplate", 'String'>;
    readonly timeSlot: Prisma.FieldRef<"LessonTemplate", 'String'>;
    readonly isActive: Prisma.FieldRef<"LessonTemplate", 'Boolean'>;
    readonly isDeleted: Prisma.FieldRef<"LessonTemplate", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"LessonTemplate", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LessonTemplate", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LessonTemplate", 'DateTime'>;
}
export type LessonTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where: Prisma.LessonTemplateWhereUniqueInput;
};
export type LessonTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where: Prisma.LessonTemplateWhereUniqueInput;
};
export type LessonTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where?: Prisma.LessonTemplateWhereInput;
    orderBy?: Prisma.LessonTemplateOrderByWithRelationInput | Prisma.LessonTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LessonTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonTemplateScalarFieldEnum | Prisma.LessonTemplateScalarFieldEnum[];
};
export type LessonTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where?: Prisma.LessonTemplateWhereInput;
    orderBy?: Prisma.LessonTemplateOrderByWithRelationInput | Prisma.LessonTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LessonTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonTemplateScalarFieldEnum | Prisma.LessonTemplateScalarFieldEnum[];
};
export type LessonTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where?: Prisma.LessonTemplateWhereInput;
    orderBy?: Prisma.LessonTemplateOrderByWithRelationInput | Prisma.LessonTemplateOrderByWithRelationInput[];
    cursor?: Prisma.LessonTemplateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonTemplateScalarFieldEnum | Prisma.LessonTemplateScalarFieldEnum[];
};
export type LessonTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonTemplateCreateInput, Prisma.LessonTemplateUncheckedCreateInput>;
};
export type LessonTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonTemplateCreateManyInput | Prisma.LessonTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    data: Prisma.LessonTemplateCreateManyInput | Prisma.LessonTemplateCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonTemplateIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonTemplateUpdateInput, Prisma.LessonTemplateUncheckedUpdateInput>;
    where: Prisma.LessonTemplateWhereUniqueInput;
};
export type LessonTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonTemplateUpdateManyMutationInput, Prisma.LessonTemplateUncheckedUpdateManyInput>;
    where?: Prisma.LessonTemplateWhereInput;
    limit?: number;
};
export type LessonTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonTemplateUpdateManyMutationInput, Prisma.LessonTemplateUncheckedUpdateManyInput>;
    where?: Prisma.LessonTemplateWhereInput;
    limit?: number;
    include?: Prisma.LessonTemplateIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where: Prisma.LessonTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonTemplateCreateInput, Prisma.LessonTemplateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonTemplateUpdateInput, Prisma.LessonTemplateUncheckedUpdateInput>;
};
export type LessonTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
    where: Prisma.LessonTemplateWhereUniqueInput;
};
export type LessonTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonTemplateWhereInput;
    limit?: number;
};
export type LessonTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonTemplateSelect<ExtArgs> | null;
    omit?: Prisma.LessonTemplateOmit<ExtArgs> | null;
    include?: Prisma.LessonTemplateInclude<ExtArgs> | null;
};
export {};
